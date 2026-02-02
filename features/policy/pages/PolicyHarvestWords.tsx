import { PolicyRenderer } from '../PolicyRenderer';

export const PolicyHarvestWords = ({ onBack }: { onBack: () => void }) => (
  <PolicyRenderer policyKey="harvest-words" onBack={onBack} />
);
