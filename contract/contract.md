Read [Understanding](/README.md) before proceeding.

##Accounts

```
// root
GBZXN7PIRZGNMHGA7MUUUF4GWPY5AYPV6LY4UV2GL6VJGIQRXFDNMADI
SC5O7VZUXDJ6JBDSZ74DSERXL7W3Y5LTOAMRF7RQRL3TAGAPS7LUVG3L

// Bala :: The father
GDH7C62VYRQJDJFOYPHN3AFXXSEXUH7RKVHDNZSCTPTTEWL7JHIRJGPP
SA6SFFOV22C2RFBCBKOIL7O5YOFYWAZCZALPNFGHTAE7VOJZDLBMLXD2

// Holding 
GCBZOP6FOS4XXYVSAWD6TPH45XQUWGXQOTZEPHMD2HXSO67QRWNKHA3N
SASHLMX4TEGE3YF6UIS5V6IDYZZ36QVSBGM34RVDNVKB3L3G2NJU6DSA

// NGO
GBQY5W5HU7BPTQQW6GWRIZWFW4UCVFY3KEI3M4O4ICXJATGJDIBRKGWE
SBAERM7CMURDAM63LLSFMHDNEQNQHAHKAZQDEOJWEQSNFPNJXW2BFS72

// Karthik : The son
GBB6K7O4BZUXT6AEQ3S6YPGUY3P7BDYQH2A5DT45T6I2GPTQQLEMOVQU
SBACMQCFDFI6PYVET475YDWCKT7IQYIC7LQKK4VHODYRRXP4RFDHGYXE
```

## Steps


### Root account creates Bala, Karthik and NGO accounts

TX1
```
Root
seq #15
fee 100
Op1
  Create bala's account 
  - Op : create_account
  - Destination : Bala
  - Starting Balance : 50000000
Op2
  Create Karthik's account 
  - Op : create_account
  - Destination : Karthik
  - Starting Balance : 100
Op3
  Create ngo's account 
  - Op : create_account
  - Destination : NGO
  - Starting Balance : 10000000
Signer Root
```

*XDR*

```
AAAAAHN2/eiOTNYcwPspSheGs/HQYfXy8cpXRl+qkyIRuUbWAAABLAAAAAAAAAATAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAHENyZWF0ZXMgQmFsYSxLYXJ0aGlrIGFuZCBOR08AAAADAAAAAAAAAAAAAAAAz/F7VcRgkaSuw87dgLe8iXof8VVONuZCm+cyWX9J0RQAAca/UmNAAAAAAAAAAAAAAAAAAGGO26enwvnCFvGtFGbFtygqlxtREbZx3ECukEzJGgMVAABa8xB6QAAAAAAAAAAAAAAAAABD5X3cDml5+ASG5ew81Mbf8I8QPoHRz52fkaM+cILIxwAAAAA7msoAAAAAAAAAAAERuUbWAAAAQDi5VKh3yhpQJ22jwGplfwMIBuA204c6RCql1C2/sTGw/YdTqOIblECbMvOntEpDql1jrdgSFFW6J4HPD33cSQQ=
```

### Bala creats a HoldingAccount and funds with sufficient money

TX2
```
Bala
seq #987967032131585
fee 100
Op1
  Create holdingAccount account 
  - Op : create_account
  - Destination : holding
  - Starting Balance : 10500200
signer Bala
```

starting bal calculation : 

```
10000000 Amount to transfer
  500000 minimum balance
     200 fee
10500200 total
```

*XDR*

```
AAAAAM/xe1XEYJGkrsPO3YC3vIl6H/FVTjbmQpvnMll/SdEUAAAAZAADgo0AAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAFkNyZWF0ZXMgSG9sZGluZ0FjY291bnQAAAAAAAEAAAAAAAAAAAAAAACnLmNRXGd994Y8qFEV+SU2X4Ze067UGXFcwHhisTKgLwAAunK/Y2QAAAAAAAAAAAF/SdEUAAAAQI5wjDikdzvb/FO0BfgxU4q2Q79VKMMTvsk7vecFEtuQu/lATsEAFlFCKQnpurLmxYSWU7lYshppmPlnOVMN7wg=
```


### He forms timebound transactions for Karthik
 
> HoldingAccount pays to Karthik

TX3
```
Holding
seq #988280564744194
fee 100
Op1
  Pay to Karthik
  - Op : payment
  - Destination : Karthik
  - Amount : a
Time Bounds
  - LowerTime : 1561917600 (11:30) 
  - UpperTime : 1561918200 (11:40)
Signer : Holding
```
*XDR*

```
AAAAAIOXP8V0uXvisgWH6bz87eFLGvB08kedg9HvJ3vwjZqjAAAAZAADhR8AAAACAAAAAQAAAABdGPigAAAAAF0Y+vgAAAABAAAADnBheSB0byBrYXJ0aGlrAAAAAAABAAAAAAAAAAEAAAAAQ+V93A5pefgEhuXsPNTG3/CPED6B0c+dn5GjPnCCyMcAAAAAAABa8xB6QAAAAAAAAAAAAA==
```

*HASH*

```
67159d12253cef3c557f307ff054cd7bde44101b1cd001a584cadc8ab54ccc8b
```

He does not submit this transaction but sends the XDR to Karthik


### He forms timebound transactions for NGO
 
> HoldingAccount pays to NGO

TX4
```
Holding
seq #988280564744194
fee 100
Op1
  Pay to NGO  
  - Op : payment
  - Destination : NGO
  - Amount : a
Time Bounds
  - LowerTime : 1561918200 (11:40)
  - UpperTime : 1561918500 (11:50)
Signer : Holding
```
*XDR*

```
AAAAAIOXP8V0uXvisgWH6bz87eFLGvB08kedg9HvJ3vwjZqjAAAAZAADhR8AAAACAAAAAQAAAABdGPr4AAAAAF0Y/CQAAAABAAAADnBheSB0byBrYXJ0aGlrAAAAAAABAAAAAAAAAAEAAAAAYY7bp6fC+cIW8a0UZsW3KCqXG1ERtnHcQK6QTMkaAxUAAAAAAABa8xB6QAAAAAAAAAAAAA==
```

*HASH*

```
5482f71ab30d1d6ea7d0ef850af0689bff584ceecdb500044a4ce173ca04fae0
```

He does not submit this transaction but sends the XDR to NGO.

### Adding hashs of these two transaction as Pre-Auth signers for the HoldingAccount, making HoldingAccount private key invalid and setting proper threshold for signers


```
Holding
seq #988280564744193
fee 100
OP1 
  Add HASH(TX3) as signer, invalidate private key and setting threshold
  - Op : set_option
  - Weight : 0
  - Low : 1
  - Medium : 1
  - High : 1
	- signer_type : Pre_Auth Transaction Hash(TX3) with weight 1
	  - Pre_Auth Transaction Hash
    - Hash(TX3) : ac4cc90a4bd7c1b0fdbaed5c548bc4bf45ff488b2cae4fc0f524edf0ebd4d128	
    - Weight : 1
OP2
  Add HASH(TX4) as signer
  - signer_type : Pre_Auth Transaction Hash(TX4) with weight 1
	  - Pre_Auth Transaction Hash
    - Hash(TX4) : eab5dcfbebc594a1ddb8d74bdd03da8133f766a801992e908ebac9a1758cbc85	
    - Weight : 1
Signer : Holding
```

*xDR*

```
AAAAAKcuY1FcZ333hjyoURX5JTZfhl7TrtQZcVzAeGKxMqAvAAAAyAADgtYAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAE0Rpc2FibGUgcHJpdmF0ZSBrZXkAAAAAAgAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAGsTMkKS9fBsP267VxUi8S/Rf9IiyyuT8D1JO3w69TRKAAAAAEAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAHqtdz768WUod2410vdA9qBM/dmqAGZLpCOusmhdYy8hQAAAAEAAAAAAAAAAbEyoC8AAABAsMuWsIjdv7PEiNIHdeb+djtiQ3L3FmmrrU10nu6feakr3Rq/VATatvhSymZ4e4XlXt4rw/VilWqtoGa2cvIKDw==
```

This transaction is submitted to the network.


### Either Karthik can submit TX3 or NGO can submit TX4 to the network


## Tests

```
ngo send between 30-40
fails : too_early

karthik send between 30-40
passes

ngo sends between 40-50 
fails : bad_seq
```
