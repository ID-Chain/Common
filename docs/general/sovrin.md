# Sovrin and Hyperledger Indy

In the digital age there are numerous projects trying to address the needs of digital identity. The survey made in 2017 by ING DLT research team counts up about 50 different systems. First quick assessment done by the researches showed that only 9 of them possess properties required for Self Sovereign Identity. The team had performed further comprehensive analysis on every property of each system from the short list resulting in the selection of three candidates, Sovrin, uPort and IRMA. The final verdict is that each product had own unique properties, but at same time no product addressed all requirements. For example, Sovrin was unique in supporting digital credential revocations, but it was unclear how Sovrin might conduct consent and withdrawal policies on provided claims.
The final selection of the product was done on the basis of the perception of the size of the supporting community, and Sovrin had won.   


To summarise the advantages of Sovrin system which undoubtedly make it good candidate to implement Self Sovereign Identity:

- delivers anonymity and confidentiality
- delivers cutting-edge cryptographic identity primitives
- employs zero-knowledge proofs
- supports partial attribute disclosure
- allows recombination of attributes from multiple claims into homogeneous proof
- supports revocations and revocation reverse
- facilitates key rotation and key withdrawal
- is extendable with user-defined ledgers and user-defined transactions
- is opened for the community coders
- is opened for the usage outside Sovrin Framework
- is portable with other DID based systems




In the next part of the document we describe main features of the Sovrin platform with the stress on its unique properties. Many conceptual details of the design of Sovrin system can be grasped from Use Case diagrams, so we strongly recommend to get familiar with them too.


First of all, Sovrin is the platform carrying properties of decentralised key management system, where identities are stored in the distributed ledger, therefore identities are provable by a sequence of immutable transactions. This type of ledger is public permissioned, so that anyone can read it, while writing to it requires privileges. The transactions where new identities become introduced are stored and signed by other members whose identities are already in the ledger. The chain of identities ended with this new identity in the ledger is often called Trust Chain. TrustChain (TC) is fundamental property of Sovrin system. TC begins in special genesis block of the ledger. This block is formed by founders of Sovrin network. The records can also be updated by the Sovrin Foundation.


Secondly, Sovrin facilitates the DID, decentralized identifier, which comprises all of the following properties:

- globally unique
- requiring no central issuing authority
- cryptographically verifiable

DIDs are nothing new. One can find example of DIDs used in Bitcoin, Ethereum, IPFS and others. Sovrin brings DIDs to new level by hardening anonymity with the principle of pairwise-pseudonymous DID. Individuals and organisations create a DID for addressing just one counter-party. One can have as many DIDs as required to address each relation. The worth of stealing or damaging DID narrows to the advantages of single specific relationship only.

The storage in Sovrin is provided by two distinct technologies, the ledger (blockchain) and the encrypted wallet. The latter contains sensitive private data, therefore Sovrin never uses ledger to store wallets. Instead, wallets are supposed to be saved to mobile devices and/or private cloud storage.  

The ledger is held and run by Sovrin Trust Framework, where provisioning of nodes is facilitated by the organisations which govern the network. The ledger in Sovrin is designed for operations which make only a sense for digital identity, hence no cryptocurrency is supported.

_Yet the ledger shows a lot of similarities to other blockchain types. For example, the integrity of records is guaranteed by Merkle tree , the deterministic consensus variates slightly from  RBFT. At same time Sovrin ledger uses shorter signatures and different synchronisation mechanism_

What makes Sovrin distinct from other similar systems or systems based on blockchain  is capability for multiple ledgers serving various non-intersecting roles.

_Sovrin uses three ledgers simultaneously, however for the sake of serving identity we restrict the scope of this paper to main ledger._

The wallet is container for private elements of the system. Entire wallet is protected by its dedicated cryptographic key, which, in simple case, can be just computed from a password. The wallet can be copied or moved to another media, thus backing up keys is not an issue.


The wallet contains objects of few types:

- DIDs owned by the owner of the wallet
- Other DIDs
- claims
- private keys used to sign claims
- private keys used for revocation of claims

Most notable property of Sovrin is confidentiality, and it comes with wallets. None of items from a wallet are  copied to public ledger, therefore sensitive information remains private to an owner of the wallet. At same time wallet becomes self-served identity object, making the platform matching important principles of Self Sovereign Identity.

Most unique property of Sovrin is the support for revocations. Every claim issued by Sovrin has revocation Id, which can be used by the issuer to mark this claim as no more valid. One can easily see from the information in previous paragraphs that the claim is stored in a wallet of the owner of the claim, therefore it can not be reached and/or modified by issuer without an action taken by that owner. While it is true, the revocation is still facilitated in Sovrin: the party which verifies the proof can check at any moment if the proof is still valid. The information on the validity of a claim is provided by public record in the ledger. This record gets written to the blockchain each time any given claim is revoked. Sovrin uses advanced cryptography for the revocation mechanism. In particular, validity records do not show any significant information about which claims are revoked. Instead, the proof of the claim contains data which uniquely identifies whether claim belongs to the collection of revoked ones.  



Sovrin is a specific instantiation of [Indy project](https://github.com/hyperledger/indy-node) , using a governance model described in the [Sovrin Provisional Trust Framework](http://bit.ly/svrn-ptrustfw). The  programming interface [Indy SDK](https://github.com/hyperledger/indy-sdk) has binding to several popular programming languages and platforms.


The original source code of Sovrin has been gifted to the Sovrin Foundation by Evernym Corporation.


Sovrin is a global utility for self-sovereign identity--that is, an identity that nobody controls except its natural owner, that can't be taken away or stripped of its privacy or manipulated through unreasonable terms of service. Imagine if you could bring your identity with you to all your digital interactions, instead of creating new logins for every online bank, every mobile app, every social network, every email client, every government agency, every shopping site...
