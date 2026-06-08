import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4">
    <div className="text-center space-y-6 max-w-md">
      <h1 className="text-7xl font-display font-bold gold-text">404</h1>
      <h2 className="text-2xl font-display font-bold text-foreground">Page Not Found</h2>
      <p className="text-muted-foreground/80 text-sm font-light leading-relaxed">
        The page you're looking for doesn't exist or has been moved. Let's get you back to Insurance Mall.
      </p>
      <Button asChild className="gold-gradient text-primary-foreground hover:opacity-95 font-semibold text-xs uppercase tracking-wider px-6 h-11 rounded-sm">
        <Link to="/" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </Button>
    </div>
  </div>
);

export default NotFound;
