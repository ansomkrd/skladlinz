<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$arParams["POPUP_POSITION"] = (isset($arParams["POPUP_POSITION"]) && in_array($arParams["POPUP_POSITION"], array("left", "right"))) ? $arParams["POPUP_POSITION"] : "left";

foreach($arResult["ITEMS"] as $key => $arItem)
{
	if($arItem["CODE"]=="IN_STOCK"){
		if(is_array($arResult["ITEMS"][$key]["VALUES"]))
			sort($arResult["ITEMS"][$key]["VALUES"]);
			
		if($arResult["ITEMS"][$key]["VALUES"])
			$arResult["ITEMS"][$key]["VALUES"][0]["VALUE"]=$arItem["NAME"];
	}
	if($arParams["HIDDEN_PROP"] && in_array($arItem["CODE"], $arParams["HIDDEN_PROP"]))
		unset($arResult["ITEMS"][$key]);
	if(!isset($arItem["NAME"]))
		unset($arResult["ITEMS"][$key]);
}

\Bitrix\Main\Localization\Loc::loadLanguageFile(__FILE__);

// sort
if ($arParams['SHOW_SORT']) {
	include 'sort.php';
}

global $sotbitFilterResult;
$sotbitFilterResult = $arResult;