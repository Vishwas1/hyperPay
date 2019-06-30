## Usecase

*Disclaimer* : This may not be the best use case but as of now let's use this.

*Mr. Bala*, a father of 3 years old kid is suffering from a major disease, wants to save a large sum of money for his kid (*Karthik*) in bank so that when Karthik *turns 18*, *only he* should be able to withdraw. Bala does not trust on his wife or any of his family member in this case since the amount is huge. Bala also wants to make sure that, in case Karthik does not claim the money within a year he truns 18, the whole money should go to a non-profit NGO's account who works for children wellfare.


## Tranasction Flow

- Bala creats a HoldingAccount.
- Funds the HoldingAccount with amount of money which he wants to transfer to Karthik
- He forms two timebound transactions and sends XDRs to Karthik (store is somewhere) and NGO
  - HoldingAccount pays to Karthik
  - HoldingAccount pays to NGO
- And adds hashs of these two transaction as Pre-Auth signers for the HoldingAccount.
- He sets the threshold of that account to 1 so that either of these transaction should  .
- He also sets the weight of HoldingAccount to 0 so that HoldingAccount's private key becomes invalid.
- When Karthik turns 18, he submits his XDR and withdraw the money.
- Else NGO submits his XDR and withdraw the money.





