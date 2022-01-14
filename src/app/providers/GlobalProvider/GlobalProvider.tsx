import React from "react";

export interface MarketSelectorContextType {
  visible: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}
export declare const MarketSelectorContext: React.Context<MarketSelectorContextType>;
export declare const MarketSelectorConsumer: React.Consumer<MarketSelectorContextType>;
declare const MarketSelectorProvider: (props: "Props") => React.ReactElement;
export default MarketSelectorProvider;
