package main;

import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;

import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Main {

	public static void main(String[] args) throws JSONException {
		// TODO Auto-generated method stub
Map<String,String> sort=new TreeMap<>();
sort.put("India","India");
sort.put("Afgan", "Afgan");
sort.put("Europe", "Europe");

System.out.println(sort.toString());
JSONObject sorted= new JSONObject(sort);


System.out.println(sorted);


JSONArray sortinARRAY=new JSONArray();
sortinARRAY.put(sort);
System.out.println(sortinARRAY);
JSONObject object = sortinARRAY.getJSONObject(0);
System.out.println(object);
TreeMap<String, String> map = new TreeMap<String, String>();

Iterator<?> keys = object.keys();

while( keys.hasNext() ){
    String key = (String)keys.next();
    String value = object.getString(key); 
    map.put(key, value);

}
System.out.println(map.toString());


	}

}
