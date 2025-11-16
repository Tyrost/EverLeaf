
import PCAArrowPlot from "@/components/dashboards/PCA";

export const IndividualPage = () => {
                const loadingVectors = [
                { variable: "sunlight", x: 0.82, y: 0.55 },
                { variable: "soil_pH", x: -0.40, y: 0.72 },
                { variable: "yield", x: 0.10, y: 0.95 },
                { variable: "rainfall", x: -0.90, y: -0.10 },
                { variable: "humidity", x: 0.30, y: -0.75 }
            ];

            return (
                <div className="flex justify-between p-10">
                    <div className="flex justify-center w-[50%] border">
                        <PCAArrowPlot 
                        width={550} 
                        height={550} 
                        vectors={loadingVectors} 
                    />
                    </div>

                </div>
            );
  

}


export default function PCAVisualizer() {

}
