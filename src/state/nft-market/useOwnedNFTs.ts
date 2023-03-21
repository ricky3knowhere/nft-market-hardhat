import { gql, useQuery } from "@apollo/client";
import userSigner from "state/signer";
import {
  GetOwnedNFTs,
  GetOwnedNFTsVariables,
} from "./__generated__/GetOwnedNFTs";
import { parseRawNFT } from "./helper";

const useOwnedNFTs = () => {
  const { address } = userSigner();
  const { data } = useQuery<GetOwnedNFTs, GetOwnedNFTsVariables>(
    GET_OWNED_NFTS,
    { variables: { owner: address ?? "" }, skip: !address }
  );

  const ownedNFTs = data?.nfttransfers.map(parseRawNFT);

  return ownedNFTs;
};

const GET_OWNED_NFTS = gql`
  query GetOwnedNFTs($owner: String) {
    nfttransfers(where: { to: $owner }) {
      id
      from
      to
      tokenURI
      price
      tokenID
    }
  }
`;

export default useOwnedNFTs;
