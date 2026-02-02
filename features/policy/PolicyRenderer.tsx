import { PolicyLayout } from './PolicyLayout';
import { POLICY_REGISTRY, PolicyKey } from './PolicyRegistry';
import { PolicyFeature } from '../policy/PolicyFeature';

interface PolicyRendererProps {
  policyKey: PolicyKey;
  onBack: () => void;
}

export const PolicyRenderer = ({
  policyKey,
  onBack,
}: PolicyRendererProps) => {
  const policy = POLICY_REGISTRY[policyKey];

  if (!policy) return null;

  return (
    <PolicyLayout
      productName={policy.productName}
      lastUpdate={policy.lastUpdate}
      onBack={onBack}
    >
      <PolicyFeature type={policy.content} />
    </PolicyLayout>
  );
};
