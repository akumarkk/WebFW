namespace AppState;

public class AppState
{
    public int Counter { get; set; }
    public override string ToString()  {

        string r = "";
        try{
         r =  Counter.ToString() +  " Counter.ToString()";
        } catch (Exception e){
            Console.WriteLine(e.ToString());
        }
        return r;
        
        }

}