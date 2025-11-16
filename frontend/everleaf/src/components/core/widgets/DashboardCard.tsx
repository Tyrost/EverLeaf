
// credit: https://github.com/adminmart/Modernize-Nextjs-Free

import React from "react";

type DashboardCardProps = {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  cardheading?: string | React.ReactNode;
  headtitle?: string | React.ReactNode;
  headsubtitle?: string | React.ReactNode;
  children?: React.ReactNode;
  middlecontent?: string | React.ReactNode;
  className?: string;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  className = "",
}: DashboardCardProps) => {
  return (
    <div className={`rounded-lg shadow-3xl border border-white/10 backdrop-blur-lg bg-[rgba(23,23,23,0.35)] ${className}`}>
      {cardheading ? (
        <div className="p-8">
          <h5 className="text-xl font-semibold text-white">{headtitle}</h5>
          <p className="text-sm text-white mt-1">{headsubtitle}</p>
        </div>
      ) : (
        <div className="p-8">
          {title && (
            <div className="flex justify-between items-center mb-6">
              <div>
                <h5 className="text-xl font-semibold text-white">{title}</h5>
                {subtitle && (
                  <p className="text-sm text-white mt-1">{subtitle}</p>
                )}
              </div>
              {action && <div>{action}</div>}
            </div>
          )}

          {children}
        </div>
      )}

      {middlecontent}
      {footer}
    </div>
  );
};

export default DashboardCard;