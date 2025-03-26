'use server'

import { Card, CardContent, CardHeader } from "./ui/card";

export interface Regulation {
  framework: string;
  country: string;
  regulatory_authority: string;
  key_requirements: string[];
  applicability: string;
}

interface RegulationCardProps {
  regulation: Regulation;
}

const RegulationCard = ({ regulation }: RegulationCardProps) => {
  return (
    <Card className="shadow-lg hover:scale-105 transition-transform">
      <CardHeader>
        <h3 className="text-xl font-semibold text-tertiary">{regulation.framework}</h3>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-primary">
          <b className="font-semibold text-foreground">Country:</b> {regulation.country}
        </p>
        <p className="font-medium text-primary">
          <b className="font-semibold text-foreground">Regulatory Authority:</b> {regulation.regulatory_authority}
        </p>
        <div className="mt-3">
          <b className="font-semibold text-foreground">Key Requirements:</b>
          <ul className="list-disc pl-5">
            {regulation.key_requirements.map((req, index) => (
              <li key={index} className="text-muted-foreground">{req}</li>
            ))}
          </ul>
        </div>
        <p className="mt-3 font-medium text-foreground">
          <b className="font-semibold text-secondary">Applicability:</b> {regulation.applicability}
        </p>
      </CardContent>
    </Card>
  );
};

export default RegulationCard;
