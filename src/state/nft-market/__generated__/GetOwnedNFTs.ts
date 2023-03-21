/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnedNFTs
// ====================================================

export interface GetOwnedNFTs_nfttransfers {
  __typename: "NFTTransfer";
  id: any;
  from: any;
  to: any;
  tokenURI: string;
  price: any;
  tokenID: any;
}

export interface GetOwnedNFTs {
  nfttransfers: GetOwnedNFTs_nfttransfers[];
}

export interface GetOwnedNFTsVariables {
  owner?: string | null;
}
