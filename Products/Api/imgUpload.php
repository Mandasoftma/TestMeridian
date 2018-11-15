<?php
	header("Access-Control-Allow-Origin: *");
    
	/// var_dump($_FILES);
	$publicKey ='9ab166e43b2f3406b382';
	$rutaTemporal= $_FILES['file']['tmp_name'];
	$nombreActual = $_FILES['file']['name'];
	$rutaActual = dirname(__FILE__)."\\temp\\".$nombreActual;
	move_uploaded_file($rutaTemporal, $rutaActual);
	$ch = curl_init();
	$urlSubir='https://upload.uploadcare.com/base/';
	$post = [
		'UPLOADCARE_PUB_KEY' => $publicKey,
		'UPLOADCARE_STORE' =>1,
		'file' => curl_file_create($rutaActual)
	];
	curl_setopt($ch, CURLOPT_URL, $urlSubir);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
	$response = curl_exec($ch);
	echo $response;