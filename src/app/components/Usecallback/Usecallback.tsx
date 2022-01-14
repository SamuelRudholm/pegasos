import React, { useCallback } from "react";

interface OptionProps {
  value?: string | number;
  label: string;
  disabled?: boolean;
}

const options: OptionProps[] = [{ label: "1" }];

export const CallBack = () => {
  const getValue = useCallback(
    (value: string | number) => {
      const match = options.find((option) => option.label === value);

      return match?.value ? match.value.toString() : null;
    },
    [options]
  );
  return <div>{getValue("1") && <div>tt</div>}</div>;
};
// PRTA -> AddUserToPatnerDialog

// const getMatchValue = useCallback(
//     (value: string | number) => {
//       const match = options.find((option) => option.label === value);

//       return match?.value ? match.value.toString() : null;
//     },
//     [options]
//   );

// Commmon front lib -> Remarketingdrawer

// const sideMenuTranslations = useDatoQuery<SideMenuDatoResponse>(SideMenuQuery);

// const appLinks = datoLinksToAppLinks(
//     sideMenuTranslations?.sideMenu,
//     currentMarket.locale,
//     partnerCountry,
//     isAdmin
//   );
