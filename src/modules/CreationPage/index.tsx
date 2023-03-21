import classNames from "classnames";
import CreationForm, { CreationValues } from "./CreationForm";
import userSigner from "state/signer";
import useNFTMarket from "state/nft-market";

const CreationPage = () => {
  const { signer } = userSigner();
  const { createNFT } = useNFTMarket();

  const onSubmit = async (values: CreationValues) => {
    console.log(values);
    await createNFT(values)
  };

  return (
    <div
      className={classNames("flex h-full w-full flex-col", {
        "items-center justify-center": !signer,
      })}
    >
      {signer ? <CreationForm onSubmit={onSubmit} /> : "Connect your wallet"}
    </div>
  );
};

export default CreationPage;
