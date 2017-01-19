import java.util.*;
import java.io.*;
import java.text.NumberFormat;


//creates the counts.js file from the research_classification.txt file
public class ReadClassification {
	
	public static void writeCount(int[] categoriesCount) {
		try{
		
		PrintWriter writer = new PrintWriter("count.js", "UTF-8");
        
		writer.println("var count = [");
			
		for(int i = 0; i < categoriesCount.length; i++) {
		    writer.println(categoriesCount[i] + ",");
			
		}
		
		writer.println("];");
		
    	
		writer.close();
		} catch (IOException e) {
           System.out.println("Can not write file.");
        }
    }
	
    public static void main(String argv[]) {
		int[] categoriesCount = null;
		Integer numberOfCategories = -1;
		int i;
		
		try {
        InputStream is = new FileInputStream("research_classification.txt");
		BufferedReader buf = new BufferedReader(new InputStreamReader(is));
		String line = buf.readLine();
		

		
		
		while(line != null){ 
		    String[] words = line.split("\\s+");
			
			if(numberOfCategories == -1) {
				numberOfCategories = words.length - 2;
				categoriesCount = new int[numberOfCategories];
				for(i = 0; i < numberOfCategories; i++) {
					categoriesCount[i] = 0;
				}
				
			}
			
			for(i = 0; i < numberOfCategories; i++) {
				if((double)NumberFormat.getInstance().parse(words[i + 2]) > 0.5) {
					categoriesCount[i] = categoriesCount[i] + 1;
				}
			}
			
			
			line = buf.readLine();
		} 
		
		} catch (Exception e) {
			
		}
			
		
		
		writeCount(categoriesCount);
	    
			
	}

}

