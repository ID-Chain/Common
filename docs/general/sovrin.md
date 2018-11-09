# Sovrin & Hyperledger Indy

Sovrin is a global utility for self-sovereign identity--that is, an identity that nobody controls
except its natural owner, that can't be taken away or stripped of its privacy or manipulated
through unreasonable terms of service. Imagine if you could bring your identity with you to
all your digital interactions, instead of creating new logins for every online bank, every mobile
app, every social network, every email client, every government agency, every shopping site...
Imagine if they logged in to you, instead of the other way around... Sovrin uses distributed ledger
(blockchain) technology to achieve this freedom, and it leverages very sophisticated cryptography
to make it all secure and private.

Sovrin's technical underpinnings
come from [Hyperledger](https://hyperledger.org)'s [Indy project](https://github.com/hyperledger/indy-node).
Sovrin is a specific instantiation of Indy, using a governance model
described in the [Sovrin Provisional Trust Framework](http://bit.ly/svrn-ptrustfw).
Thus, the code that's stored here is mostly a thin veneer on top of Indy--just enough to provide
genesis transactions for the particular machines that bootstrapped Sovrin, plus some light
utilities for those who run Sovrin.