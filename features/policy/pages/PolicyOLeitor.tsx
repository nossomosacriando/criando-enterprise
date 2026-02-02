import { PolicyRenderer } from '../PolicyRenderer';

export const PolicyOLeitor = ({ onBack }: { onBack: () => void }) => (
  <PolicyRenderer policyKey="o-leitor" onBack={onBack} />
);
