import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  width?: string | number;
  height?: string | number;
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  loading = "lazy",
  width,
  height,
  sizes,
  srcSet,
  priority = false,
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton loader */}
      {!imageLoaded && !imageError && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      )}

      {/* Error state fallback */}
      {imageError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">
            Image unavailable
          </span>
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        className={cn(
          "transition-opacity duration-500",
          imageLoaded ? "opacity-100" : "opacity-0",
          className,
        )}
        loading={priority ? "eager" : loading}
        decoding="async"
        width={width}
        height={height}
        sizes={sizes}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default OptimizedImage;
