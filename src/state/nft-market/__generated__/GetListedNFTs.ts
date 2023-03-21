/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListedNFTs
// ====================================================

export interface GetListedNFTs_nfttransfers {
  __typename: "NFTTransfer";
  id: any;
  from: any;
  to: any;
  tokenURI: string;
  price: any;
  tokenID: any;
}

export interface GetListedNFTs {
  nfttransfers: GetListedNFTs_nfttransfers[];
}

export interface GetListedNFTsVariables {
  currentAddres?: string | null;
}
