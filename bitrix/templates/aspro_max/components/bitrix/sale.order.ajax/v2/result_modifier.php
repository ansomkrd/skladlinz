<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arParams
 * @var array $arResult
 * @var SaleOrderAjax $component
 */
use Bitrix\Sale;
$basket = Sale\Basket::loadItemsForFUser(Sale\Fuser::getId(), Bitrix\Main\Context::getCurrent()->getSite());
$basketItems = $basket->getBasketItems();
$ID = array();
foreach ($basketItems as $basketItem) {
   $ID[] = $basketItem->getProductId();
}

$arSelect = Array("ID");
$arFilter = Array("ID"=> $ID, "PROPERTY_SPECIAL_DELIVERY_VALUE"=>"Да");
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
if($ob = $res->GetNextElement()){
    $SPECIAL_DELIVERY = "Y";
}else{
    $SPECIAL_DELIVERY = "N";
}

$dateDel = getDateDel($SPECIAL_DELIVERY);
$arResult['DATE_START'] = $dateDel["DATE_START"];
$arResult['TIME_DATE_START'] = $dateDel["TIME_DATE_START"];
    

$component = $this->__component;
$component::scaleImages($arResult['JS_DATA'], $arParams['SERVICES_IMAGES_SCALING']);