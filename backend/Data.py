from database.Commander import Commander
import numpy as np
import pandas as pd
import sklearn
import matplotlib.pyplot as plt
import seaborn as sns
class Data:
    
    def __init__(self):
        
        self.p = None
        self.data = self.gather_data()
        self.farm_df = pd.DataFrame(self.data)
    
    def gather_data(self):
        return Commander().get_all_farms()
    
    def calculate_coordinate_health(self): # for plotting dots on map
        num_cols = self.farm_df.select_dtypes(include="number").columns

        exclude = ["latitude", "longitude", "sensor_id"]
        num_cols = [c for c in num_cols if c not in exclude]

        col_means = self.farm_df[num_cols].mean()

        percentage_diff = ((self.farm_df[num_cols] - col_means).abs() / col_means) * 100

        self.farm_df["health_index"] = percentage_diff.mean(axis=1)

        # central point of typical farms
        self.farm_df["health_index"].sort_values(ascending=True)

        cutoff = self.farm_df["health_index"].iloc[len(self.farm_df)//2]

        locations = self.farm_df[["longitude", "latitude", "health_index"]].sort_values("health_index", ascending=True).to_dict(orient="records")
        
        return locations, float(cutoff)
    
    def get_average_per_country(self, feature): # for panel
        average = self.farm_df.groupby("region").mean(numeric_only=True).to_dict()
        return average[feature]
        
        
    def country_per_feature(self): # for histogram
        average_values = self.farm_df.groupby("region").mean(numeric_only=True).to_dict()
        return average_values
    
    def gather_scatterplot(self, x, y): # for scatterplot
        # api use
        if not x in self.farm_df.describe().columns:
            return False
        if not y in self.farm_df.describe().columns:
            return False
        
        return {
            "x": self.farm_df[x],
            "y": self.farm_df[y]
        }

    def linear_regression(self, feature_x, feature_y, x_value):
        x = self.farm_df[feature_x]
        y = self.farm_df[feature_y]

        x_bar = np.mean(x)
        y_bar = np.mean(y)

        std_x = np.std(x)
        std_y = np.std(y)

        r = np.corrcoef(x, y)[0][1]
        b_hat = r * (std_y/std_x)
        a_hat = y_bar - b_hat*x_bar

        predict = lambda x: a_hat + b_hat * x
        
        predictive_vals = []
        predicted_vals = []

        step_up = (max(x) - min(x)) * 0.03

        bound = predict(max(x)) * 1.20
        
        current_x = x_value
        current_y = predict(current_x)

        while current_y < bound:
            predictive_vals.append(current_x)
            predicted_vals.append(current_y)
            current_x += step_up
            current_y = predict(current_x)
        
        new = len(predictive_vals)
        
        return [list(x) + predictive_vals, list(y) + predicted_vals, new]
    
    def set_ranges(self, feature_x):
        return np.min(self.farm_df[feature_x]), np.max(self.farm_df[feature_x]) * 1.5