//This function tries to names the categories that mallet has found, from their associated keywords.
//It does not try to classify articles from their keywords, but only to name the categories that mallet has already found.


function detectName(keys) {
	if(keys.indexOf("diode") >= 0 && keys.indexOf("light") >= 0 ) {
		return "electronics";
	}
	
	if(keys.indexOf("game ") >= 0 && keys.indexOf("games ") >= 0 ) {
		return "game theory";
	}
	
	if(keys.indexOf("r&d ") >= 0 && keys.indexOf("strategic ") >= 0 ) {
		return "r&d strategy";
	}
	
	
	
	if(keys.indexOf("social ") >= 0 && keys.indexOf("internet ") >= 0 ) {
		return "social media";
	}
	
	if(keys.indexOf("social ") >= 0 && keys.indexOf("internet ") >= 0 ) {
		return "social media";
	}
	
	if(keys.indexOf("visual ") >= 0 && keys.indexOf("color ") >= 0 && keys.indexOf("images ") >= 0 ) {
		return "graphics ";
	}
	
	if(keys.indexOf("visualization ") >= 0 && keys.indexOf("digital ") >= 0 ) {
		return "visualization ";
	}
	
	if(keys.indexOf("visualization ") >= 0 && keys.indexOf("virtual ") >= 0 ) {
		return "visualization ";
	}
	
	if(keys.indexOf("algorithms ") >= 0 && keys.indexOf("tree ") >= 0 && keys.indexOf("optimal ") >= 0 ) {
		return "algorithms ";
	}
	
	if(keys.indexOf("tree") >= 0 && keys.indexOf("search ") >= 0 && keys.indexOf("binary ") >= 0 ) {
		return "algorithms ";
	}
	
	if(keys.indexOf("algorithms ") >= 0 && keys.indexOf("problem ") >= 0 && keys.indexOf("graphs ") >= 0 && keys.indexOf("search ") >= 0) {
		return "algorithms ";
	}
	
	if(keys.indexOf("algorithms ") >= 0 && keys.indexOf("problem ") >= 0 && keys.indexOf("problems ") >= 0 && keys.indexOf("algorithm ") >= 0) {
		return "algorithms ";
	}
	
	if(keys.indexOf("tool ") >= 0 && keys.indexOf("machine ") >= 0 && keys.indexOf("design ") >= 0 && keys.indexOf("vision ") >= 0) {
		return "general engineering ";
	}
	
	if(keys.indexOf("public ") >= 0 && keys.indexOf("education ") >= 0 && keys.indexOf("scientific ") >= 0 ) {
		return "research&educational politics ";
	}
	
	if(keys.indexOf("challenges ") >= 0 && keys.indexOf("future ") >= 0 ) {
		return "research&educational politics ";
	}
	
	if(keys.indexOf("neural ") >= 0 && keys.indexOf("genetic ") >= 0) {
		return "artificial intelligence ";
	}
	
	if(keys.indexOf("intelligence ") >= 0 && keys.indexOf("artificial ") >= 0) {
		return "artificial intelligence ";
	}
	
	if(keys.indexOf("learning ") >= 0 && keys.indexOf("classification ") >= 0 && keys.indexOf("neural ") >= 0) {
		return "artificial intelligence ";
	}
	
	if(keys.indexOf("learning ") >= 0 && keys.indexOf("classification ") >= 0 && keys.indexOf("detection ") >= 0) {
		return "artificial intelligence ";
	}
	
	if(keys.indexOf("grammars ") >= 0 && keys.indexOf("regular ") >= 0 && keys.indexOf("context-free ") >= 0) {
		return "grammars & parsing ";
	}
	
	if(keys.indexOf("parallel ") >= 0 && keys.indexOf("distributed ") >= 0 && keys.indexOf("system") >= 0) {
		return "concurrent, parallel and distributed systems ";
	}
	
	if(keys.indexOf("data") >= 0 && keys.indexOf("mining ") >= 0 ) {
		return "data mining ";
	}
	
	if(keys.indexOf("automata") >= 0 && keys.indexOf("finite ") >= 0 ) {
		return "automata theory ";
	}
	
	if(keys.indexOf("network") >= 0 && keys.indexOf("wireless ") >= 0 ) {
		return "networking ";
	}
	
	if(keys.indexOf("grid") >= 0 && keys.indexOf("scheduling ") >= 0 && keys.indexOf("computing ") >= 0 ) {
		return "grid computing ";
	}
	
	if(keys.indexOf("grid") >= 0 && keys.indexOf("cloud ") >= 0 ) {
		return "grid computing ";
	}
	
	if(keys.indexOf("database") >= 0 && keys.indexOf("relational ") >= 0 ) {
		return "databases ";
	}
	
	if(keys.indexOf("und ") >= 0 && keys.indexOf("von ") >= 0 && keys.indexOf("automaten ") >= 0) {
		return "Non-English research ";
	}
	
	if(keys.indexOf("design ") >= 0 && keys.indexOf("development ") >= 0 && keys.indexOf("management ") >= 0) {
		return "design and developement strategies ";
	}
	
	if(keys.indexOf("supply ") >= 0 && keys.indexOf("chain ") >= 0) {
		return "supply chain ";
	}
	
	if(keys.indexOf("supply ") >= 0 && keys.indexOf("management ") >= 0 && keys.indexOf("customers ") >= 0) {
		return "project management ";
	}
	
	if(keys.indexOf("computer ") >= 0 && keys.indexOf("science ") >= 0 && keys.indexOf("technologies ") >= 0) {
		return "general computer science ";
	}
	
	if(keys.indexOf("internet ") >= 0 && keys.indexOf("communication ") >= 0 && keys.indexOf("information ") >= 0 && keys.indexOf("european ") >= 0) {
		return "communication policies ";
	}
	
	if(keys.indexOf("semantic ") >= 0 && keys.indexOf("data ") >= 0 && keys.indexOf("model ") >= 0) {
		return "semantic data model ";
	}
	
	if(keys.indexOf("logic ") >= 0 && keys.indexOf("semantics ") >= 0 && keys.indexOf("language") >= 0 ) {
		return "formal analysis ";
	}
	
	if(keys.indexOf("control ") >= 0 && keys.indexOf("system ") >= 0 && keys.indexOf("monitoring ") >= 0) {
		return "control systems ";
	}
	
	if(keys.indexOf("model ") >= 0 && keys.indexOf("models ") >= 0 && keys.indexOf("modelling ") >= 0) {
		return "system modelling ";
	}
	
	if(keys.indexOf("science ") >= 0 && keys.indexOf("computational ") >= 0) {
		return "computational science ";
	}
	
	if(keys.indexOf("semantic ") >= 0 && keys.indexOf("web ") >= 0 && keys.indexOf("information ") >= 0) {
		return "semantic web ";
	}
	
	if(keys.indexOf("internet ") >= 0 && keys.indexOf("mobile ") >= 0 && keys.indexOf("broadband ") >= 0 && keys.indexOf("wireless ") >= 0) {
		return "internet ";
	}
	
	if(keys.indexOf("lattice ") >= 0 && keys.indexOf("cellular ") >= 0 && keys.indexOf("automata ") >= 0) {
		return "physics ";
	}
	
	if(keys.indexOf("flow ") >= 0 && keys.indexOf("boltzmann ") >= 0 ) {
		return "physics ";
	}
	
	if(keys.indexOf("management ") >= 0 && keys.indexOf("industry ") >= 0 && keys.indexOf("technology ") >= 0) {
		return "research strategies ";
	}
	
	if(keys.indexOf("image ") >= 0 && keys.indexOf("images ") >= 0 && keys.indexOf("color ") >= 0) {
		return "image processing ";
	}
	
	if(keys.indexOf("image ") >= 0 && keys.indexOf("recognition ") >= 0) {
		return "image processing ";
	}
	
	if(keys.indexOf("guest ") >= 0 && keys.indexOf("future ") >= 0 && keys.indexOf("research ") >= 0) {
		return "research policies ";
	}
	
	if(keys.indexOf("guest ") >= 0 && keys.indexOf("future ") >= 0 && keys.indexOf("editorial ") >= 0) {
		return "research policies ";
	}
	
	if(keys.indexOf("study ") >= 0 && keys.indexOf("case ") >= 0 && keys.indexOf("comparative ") >= 0) {
		return "studies analysis ";
	}
	
	
	
	
	var words = keys.split(" ");
	
    return words[0] + "..." +words[1] + "..."+words[2];
}