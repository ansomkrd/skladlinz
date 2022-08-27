<?define("STATISTIC_SKIP_ACTIVITY_CHECK", "true");?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
use Bitrix\Main\Application, 
    Bitrix\Main\Context, 
    Bitrix\Main\Request;

if(!\Bitrix\Main\Loader::includeModule("sale") || !\Bitrix\Main\Loader::includeModule("catalog") || !\Bitrix\Main\Loader::includeModule("iblock")){
	echo "failure";
	return;
}
$request = Context::getCurrent()->getRequest();

if(isset($request["id"])){
    $db_props = CIBlockElement::GetProperty(59, $id, array("sort" => "asc"), Array("CODE"=>"SPECIAL_DELIVERY"));
    if($ar_props = $db_props->Fetch()){
        $SPECIAL_DELIVERY = $ar_props["VALUE_XML_ID"];
    }

    if(empty($SPECIAL_DELIVERY)){
        $SPECIAL_DELIVERY = "N";
    }

    $dateDel = getDateDel($SPECIAL_DELIVERY);

    $maseng = "Доставим ";
    if($dateDel["DATE_START"] == date("d.m.Y")){
        $maseng .= "сегодня c ";
    }else{
        $maseng .= "завтра c ";
    }

    switch ($dateDel["TIME_DATE_START"]) {
        case 1:
            $maseng .= "9-00 до 13-00";
            break;
        case 2:
            $maseng .= "13-00 до 18-00";
            break;
        case 3:
            $maseng .= "19-00 до 23-00";
            break;
    }

    echo $maseng;
}else{
    echo "Ошибка";
}