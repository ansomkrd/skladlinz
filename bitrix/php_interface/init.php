<?php
use Bitrix\Main\Loader; 

Loader::includeModule("highloadblock"); 

use Bitrix\Highloadblock as HL; 
use Bitrix\Main\Entity;


function getCatalogElementProps($sectionCode) {
	$arProps = [
		0 => "BRAND",
		1 => "LINK_SALE",
		2 => "EXPANDABLES",
		3 => "CML2_ARTICLE",
		4 => "LINK_VACANCY",
		5 => "VIDEO_YOUTUBE",
		6 => "POPUP_VIDEO",
		7 => "PROP_2104",
		8 => "LINK_NEWS",
		9 => "ASSOCIATED",
		10 => "HELP_TEXT",
		11 => "LINK_STAFF",
		12 => "LINK_BLOG",
		13 => "PROP_2033",
		14 => "SERVICES",
		15 => "CML2_ATTRIBUTES",
		16 => "COLOR_REF2",
		17 => "PROP_2102",
		18 => "PROP_159",
		19 => "PROP_349",
		20 => "PROP_327",
		21 => "PROP_370",
		22 => "PROP_336",
		23 => "PROP_346",
		24 => "PROP_2120",
		25 => "PROP_2089",
		26 => "PROP_2103",
		27 => "PROP_2085",
		28 => "PROP_2083",
		29 => "PROP_348",
		30 => "PROP_350",
		31 => "PROP_2101",
		32 => "PROP_2067",
		33 => "PROP_319",
		34 => "PROP_328",
		35 => "PROP_338",
		36 => "PROP_2065",
		37 => "PROP_366",
		38 => "PROP_341",
		39 => "PROP_283",
		40 => "PROP_2066",
		41 => "PROP_342",
		42 => "PROP_367",
		43 => "PROP_2084",
		44 => "PROP_340",
		45 => "PROP_351",
		46 => "PROP_369",
		47 => "PROP_337",
		48 => "PROP_339",
		49 => "PROP_309",
		50 => "PROP_206",
		51 => "PROP_2100",
		52 => "PROP_315",
		53 => "PROP_2091",
		54 => "PROP_307",
		55 => "PROP_305",
		56 => "PROP_352",
		57 => "PROP_317",
		58 => "PROP_357",
		59 => "PROP_318",
		60 => "PROP_2052",
		61 => "PROP_2115",
		62 => "PROP_2053",
		63 => "PROP_363",
		64 => "PROP_320",
		65 => "PROP_325",
		66 => "PROP_300",
		67 => "PROP_322",
		68 => "PROP_362",
		69 => "PROP_365",
		70 => "PROP_359",
		71 => "PROP_284",
		72 => "PROP_364",
		73 => "PROP_356",
		74 => "PROP_343",
		75 => "PROP_314",
		76 => "PROP_316",
		77 => "PROP_333",
		78 => "PROP_332",
		79 => "PROP_360",
		80 => "PROP_353",
		81 => "PROP_347",
		82 => "PROP_25",
		83 => "PROP_2114",
		84 => "PROP_301",
		85 => "PROP_323",
		86 => "PROP_324",
		87 => "PROP_355",
		88 => "PROP_304",
		89 => "PROP_358",
		90 => "PROP_344",
		91 => "PROP_2113",
		92 => "PROP_302",
		93 => "PROP_303",
		94 => "PROP_2054",
		95 => "PROP_223",
		96 => "PROP_354",
		97 => "PROP_313",
		98 => "PROP_329",
		99 => "PROP_368",
		100 => "PROP_331",
		101 => "PROP_345",
		102 => "PROP_310",
		103 => "PROP_330",
		104 => "PROP_2017",
		105 => "PROP_335",
		106 => "PROP_321",
		107 => "PROP_308",
		108 => "PROP_334",
		109 => "PROP_311",
		110 => "PROP_2132",
		111 => "SHUM",
		112 => "PROP_361",
		113 => "PROP_326",
		114 => "PROP_2026",
		115 => "PROP_2090",
		116 => "PROP_2027",
		117 => "PROP_2098",
		118 => "PROP_2112",
		119 => "PROP_2122",
		120 => "PROP_221",
		121 => "PROP_24",
		122 => "PROP_2134",
		123 => "PROP_23",
		124 => "PROP_2049",
		125 => "PROP_22",
		126 => "PROP_2095",
		127 => "PROP_2044",
		128 => "PROP_162",
		129 => "PROP_207",
		130 => "PROP_220",
		131 => "PROP_2094",
		132 => "PROP_2092",
		133 => "PROP_2111",
		134 => "PROP_2133",
		135 => "PROP_2096",
		136 => "PROP_2086",
		137 => "PROP_285",
		138 => "PROP_2130",
		139 => "PROP_286",
		140 => "PROP_222",
		141 => "PROP_2121",
		142 => "PROP_2123",
		143 => "PROP_2124",
		144 => "PROP_2093",
		145 => "LINK_REVIEWS",
		146 => "PROP_312",
		147 => "PROP_3083",
		148 => "PROP_2055",
		149 => "PROP_2069",
		150 => "PROP_2062",
		151 => "PROP_2061",
		152 => "RECOMMEND",
		153 => "NEW",
		154 => "STOCK",
		155 => "VIDEO",
		156 => "TIP_OPRAVY",
		157 => "FORMA_OKULYARA",
		158 => "MATERIAL",
		159 => "PO_POLU_",
		160 => "POLYARIZATSIYA",
		161 => "SROK_ISPOLZOVANIYA",
		162 => "TIP_SREDSTVA_PO_UKHODU",
		163 => "REZHIM_NOSHENIYA",
		164 => "PROIZVODITEL",
		165 => "SROK_ZAMENY_DNI",
	];
	$res = \CIBlockSection::GetList(
		Array("left_margin"=>"asc", "SORT"=>"ASC"),
		Array("CODE" => $sectionCode),
		false,
		Array('ID', 'NAME', 'IBLOCK_ID')
	);
	$row = $res->Fetch();
	$res = \CIBlockSection::GetNavChain($row["IBLOCK_ID"], $row["ID"]);
	while($row = $res->GetNext()) {
		switch($row["ID"]) {
			case 1001:
				$arProps = [
					"SROK_ZAMENY_DNI",
					"PROIZVODITEL",
					""
				];
				break;
			case 1013:
				$arProps = [
					"SROK_ISPOLZOVANIYA",
					"PROIZVODITEL",
					""
				];
				break;
			case 1011:
			case 1012:
				$arProps = [
					"PO_POLU_",
					"MATERIAL",
					"PROP_2083",
					"TIP_OPRAVY",
					"FORMA_OKULYARA",
					"BREND",
					"BRAND",
					"POLYARIZATSIYA",
					"CML2_MANUFACTURER",
					"PROIZVODITEL"
				];
				break;
		}
	}
	
	return $arProps;
}

function getDateDel($spec){
	$mas = array();
	if($spec == "Y"){
		$mas["DATE_START"] = date('d.m.Y', time() + 86400);
		$mas["TIME_DATE_START"] =  3;
	}else{
		$hour = date('G');
		if($hour < 12){
			$mas["DATE_START"] = date('d.m.Y');
			$mas["TIME_DATE_START"] =  2;
		}elseif($hour < 17){
			$mas["DATE_START"] = date('d.m.Y');
			$mas["TIME_DATE_START"] =  3;
		}elseif($hour > 16){
			$mas["DATE_START"] = date('d.m.Y' + 86400);

			$WEEKEND = false;

			$hlblock = HL\HighloadBlockTable::getById(7)->fetch(); 
			$entity = HL\HighloadBlockTable::compileEntity($hlblock); 
			$entity_data_class = $entity->getDataClass(); 

			if(date('N') < 6){
				$rsData = $entity_data_class::getList(array(
					"select" => array("*"),
					"order" => array("ID" => "ASC"),
					"filter" => array("UF_DATE"=>date('d.m.Y'),"UF_WEEKEND"=>1) 
				));

				if($arData = $rsData->Fetch()){
					$WEEKEND = true;
				}
			}else{
				$rsData = $entity_data_class::getList(array(
					"select" => array("*"),
					"order" => array("ID" => "ASC"),
					"filter" => array("UF_DATE"=>date('d.m.Y'),"UF_WEEKEND"=>0) 
				));

				if(!$arData = $rsData->Fetch()){
					$WEEKEND = true;
				}
			}

			$mas["WEEKEND"] = $WEEKEND;

			if($WEEKEND){
				$mas["TIME_DATE_START"] =  2;
			}else{
				if($hour < 20){
					$mas["TIME_DATE_START"] =  1;
				}else{
					$mas["TIME_DATE_START"] =  2;
				}
			}

		}
	}
	return $mas;
}