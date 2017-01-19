import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import java.util.Hashtable;
import java.util.Set;
import java.util.List;
import java.util.Arrays;
import java.io.PrintWriter;
import java.io.IOException;

//reads NUMBER_OF_ARTICLES articles from the xml and writes their titles in the "files" folder
public class XMLReader {
	
	static Hashtable<String, Integer> numbers = new Hashtable<String, Integer>();
	
	static int NUMBER_OF_ARTICLES = 10000;
	
	static int file_number = 0;
   
	public static void processTitle(String title) {
		file_number++;
		writeFile(title);
	}
	
	public static void writeFile(String title) {
		try{
		
		PrintWriter writer = new PrintWriter("files\\file" + file_number + ".txt", "UTF-8");
        writer.println(title);
    	
		writer.close();
		} catch (IOException e) {
           System.out.println("Can not write file.");
        }
    }
	
	
   public static void main(String argv[]) {
	   
	   System.setProperty("jdk.xml.entityExpansionLimit", "0");

    try {

	SAXParserFactory factory = SAXParserFactory.newInstance();
	SAXParser saxParser = factory.newSAXParser();

	DefaultHandler handler = new DefaultHandler() {

	boolean isArticle = false;
    boolean isTitle = false;
	boolean isAddress = false;
	
	int articles = 0;
	
	String title = "";
	String address = "";
	

	//at start of xml node
	public void startElement(String uri, String localName,String qName,
                Attributes attributes) throws SAXException {


		if (qName.equalsIgnoreCase("ARTICLE")) {
			isArticle = true;
		}
		
		if (qName.equalsIgnoreCase("TITLE")) {
			isTitle = true;
		}

		if (qName.equalsIgnoreCase("EE")) {
			isAddress = true;
		}
		
		

	}

	//at end of xml node
	public void endElement(String uri, String localName,
		String qName) throws SAXException {

		if (qName == "article") {
			
			processTitle(title);
			
			title = "";
			address = "";
			isArticle = false;
			articles++;
			
			if (articles == NUMBER_OF_ARTICLES) {
				System.exit(0);
			}
		}
		
		if (qName == "title") {
			isTitle = false;
		}
		
		if (qName == "ee") {
			isAddress = false;
		}

	}

	//in an xml node
	public void characters(char ch[], int start, int length) throws SAXException {
	
		if (isTitle) {
			title += new String(ch, start, length);
		}

		if (isAddress) {
			address += new String(ch, start, length);	
		}		
	}

 };

       saxParser.parse(".\\dblp.xml", handler);

     } catch (Exception e) {
       e.printStackTrace();
     }

   }

}