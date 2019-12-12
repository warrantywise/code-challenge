<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class productController extends Controller {
	private $products = array(
		'1' => array("name"=> "car", "color" => "blue", "style" => "hatchback", "price" => 22000 ),
		'2' => array("name"=> "car2", "color" => "red", "style" => "saloon", "price" => 25000 ),
		'3' => array("name"=> "car3", "color" => "orange", "style" => "coupe", "price" => 32000 ));
	/*
	 * gets all products in products array
	 * @return string[]
	 */
	public function get() {
		if(count($this->products) > 0) {
			return response(json_encode($this->products), 200);
		}
		else {
			return response(json_encode('No products listed'), 404);
		}

	}
	
}