# HyperPay - one click payment protocol

## What?

HyerPay is one-click payment protocol which enables remitter to create a *guaranteed* timbound payment transaction for beneficiary. The beneficiary has to submit the transaction, by just clicking on one link, within the timebound in order to receieve the payment. 

It is also possible to configure this protocol in multiple ways in order to suites business needs. For example, the business may need to have a payment to beneficiary from more than one remitters in the multisignature setup. 

## How?

In order to provide *guarantee* to the beneficiary that he/she will receieve the payment if the transaction is submitted (or the link is clicked) within the timebound, HyperPay make use of concept of *Escrow* to lock the amount for beneficiary which only beneficiary can redeem. If the beneficiary does not redeem the locked amount within the timebound, the amount returns back to the remitter.

All these happens just with One click!

## Use Case

- Gift Coupon
- P2P Banker cheque 
- Refund Payout
- Invoice factoring 
