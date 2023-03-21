/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnedListedNFTs
// ====================================================

export interface GetOwnedListedNFTs_nfttransfers {
  __typename: "NFTTransfer";
  id: any;
  from: any;
  to: any;
  tokenURI: string;
  price: any;
  tokenID: any;
}

export interface GetOwnedListedNFTs {
  nfttransfers: GetOwnedListedNFTs_nfttransfers[];
}

export interface GetOwnedListedNFTsVariables {
  owner: string;
}
