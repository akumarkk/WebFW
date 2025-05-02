using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace JSStorage;

public class JSStorage
{
    public IJSRuntime _jsRuntime;

    public IJSRuntime JSRuntime {
        get => _jsRuntime;
        set => _jsRuntime = value;
    }

    public JSStorage(IJSRuntime jSRuntime) {
        _jsRuntime = jSRuntime;
    }
    public async Task<string?> GetItem(string key)
    {

        return await _jsRuntime.InvokeAsync<string>("sessionStorage.getItem", key);
    } 
    //=> throw new NotImplementedException();
    public async Task SetItem(string key, string val)
    {
        await _jsRuntime.InvokeVoidAsync("sessionStorage.setItem", key, val);

    } 
    //=> throw new NotImplementedException();
}