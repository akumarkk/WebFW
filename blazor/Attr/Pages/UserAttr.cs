namespace Attr.Pages;
class UserAttr : Attribute{
    public string Name { get; set; }
    public string Value { get; set; }

    public UserAttr(string name, string value) {
        Name = name;
        Value = value;
    }
}