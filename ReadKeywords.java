import java.util.*;
import java.io.*;
import java.text.NumberFormat;

//creates the keys.js file from the research_keys.txt file
public class ReadKeywords {
	
	
    public static void main(String argv[]) {
		int i;
		
		try {
        InputStream is = new FileInputStream("research_keys.txt");
		BufferedReader buf = new BufferedReader(new InputStreamReader(is));
		String line = buf.readLine();
		PrintWriter writer = new PrintWriter("keys.js", "UTF-8");
        
		

		
		writer.print("var keys = [");
		while(line != null){ 
		    String[] words = line.split("\\s+");
			
			writer.print("\"");
			for(i = 2; i< words.length; i++) {
				writer.print(words[i] + " ");
			}
			writer.println("\",");
			
			
			line = buf.readLine();
		} 
		
		writer.print("];");
		
		
		   writer.close();
		
		} catch (Exception e) {
			System.out.println(e);
		}
			
		
		
		
	    
			
	}

}

