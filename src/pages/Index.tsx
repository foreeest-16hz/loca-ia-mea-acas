import { useState } from "react";
import { MapPin, Copy, Check, Car, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import parkingImage from "@/assets/parking-area.jpg";
import blockImage from "@/assets/block-scale.jpg";

const ADDRESS = "Calea Bucovinei nr. 75, Bloc 5, Scara C, Ap. 43, Suceava, Câmpulung Moldovenesc";
const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=47.527320861816406,25.56754493713379&z=17&hl=en";

const Index = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      toast.success("Adresa a fost copiată!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Nu s-a putut copia adresa");
    }
  };

  const handleOpenMaps = () => {
    window.open(GOOGLE_MAPS_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 text-center border-b border-border">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold text-foreground">PDR's HQ</h1>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto">
          Bine ai venit, rău ai nimerit! <br/>
          Aici găsești toate informațiile pentru a ajunge la mine.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Address Card */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-sm font-medium text-muted-foreground mb-2">Adresa</h2>
            <p className="text-lg font-medium text-foreground mb-6">{ADDRESS}</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleOpenMaps}
                className="flex-1"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Deschide în Google Maps
              </Button>
              <Button 
                variant="secondary"
                onClick={handleCopyAddress}
                className="flex-1"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copiat!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiază adresa
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Parking Photo */}
        <Card className="shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              <h2 className="font-medium text-foreground">Unde poți parca</h2>
            </div>
            <img 
              src={parkingImage} 
              alt="Zona de parcare" 
              className="w-full object-cover"
              style={{height: '600px'}}
            />
            <div className="p-4">
              <p className=" text-sm text-muted-foreground">
                Parcarea se află pe strada cu Lidl-ul.
              </p>
              <p className="text-sm text-muted-foreground">
                Sau poți parca în parcarea Lidl-ului.
              </p>
              <p className=" text-sm text-muted-foreground">
               Sau unde vrei tu.
              </p>
              <p className=" text-sm text-muted-foreground">
                Sau dacă n-ai mașină, spune-i elicopterului să te lase pe bloc.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Block Scale Photo */}
        <Card className="shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h2 className="font-medium text-foreground">Scara blocului</h2>
            </div>
            <img 
              src={blockImage} 
              alt="Scara blocului" 
              className="w-full object-cover"
              style={{height: '600px'}}
            />
            <p className="p-4 text-sm text-muted-foreground">
              N-ar trebui să fie complicat
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          10 lei taxă de intrare! 🏠
        </p>
      </footer>
    </div>
  );
};

export default Index;
