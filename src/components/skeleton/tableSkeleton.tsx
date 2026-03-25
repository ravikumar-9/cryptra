import React from "react";
import { Skeleton } from "../ui/skeleton";

const TableSkeleton = ({ rows = 5, cols = 5 }) => {
    return (
      <div className="w-full border border-gray-800 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 p-4 bg-black/40">
          {Array.from({ length: cols }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full animate-pulse" />
          ))}
        </div>
  
        {/* Rows */}
        <div className="divide-y divide-gray-800">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-5 gap-4 p-4 items-center"
            >
              {Array.from({ length: cols }).map((_, colIndex) => (
                <Skeleton
                  key={colIndex}
                  className="h-4 w-full animate-pulse"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default React.memo(TableSkeleton);