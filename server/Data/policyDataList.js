const policyDataList = [
    {
      insuranceType: 'Home Insurance',
      policyStartDate: new Date().toISOString().split('T')[0],
      policyTerm: '3 Years',
      policyEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 3)).toISOString().split('T')[0],
      claimLimit: 20000,
      remainingClaimLimit: 20000,
    },
    {
      insuranceType: 'Pet Insurance',
      policyStartDate: new Date().toISOString().split('T')[0],
      policyTerm: '1 Year',
      policyEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      claimLimit: 8000,
      remainingClaimLimit: 8000,
    },
    {
      insuranceType: 'Travel Insurance',
      policyStartDate: new Date().toISOString().split('T')[0],
      policyTerm: '2 Years',
      policyEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString().split('T')[0],
      claimLimit: 12000,
      remainingClaimLimit: 12000,
    },
    {
      insuranceType: 'Renters Insurance',
      policyStartDate: new Date().toISOString().split('T')[0],
      policyTerm: '1 Year',
      policyEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      claimLimit: 15000,
      remainingClaimLimit: 15000,
    },
    {
      insuranceType: 'Boat Insurance',
      policyStartDate: new Date().toISOString().split('T')[0],
      policyTerm: '4 Years',
      policyEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 4)).toISOString().split('T')[0],
      claimLimit: 25000,
      remainingClaimLimit: 25000,
    },
    {
      insuranceType: 'Motorcycle Insurance',
      policyStartDate: new Date().toISOString().split('T')[0],
      policyTerm: '2 Years',
      policyEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString().split('T')[0],
      claimLimit: 18000,
      remainingClaimLimit: 18000,
    },
  ];
  
  module.exports = policyDataList;
  