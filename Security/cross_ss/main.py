from flask import Flask, render_template, request, flash

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Important for flash messages

@app.route("/", methods=["GET", "POST"])
def index():
    name = None
    email = None
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")

        if not name:
            flash("Name is required!")
        if not email:
            flash("Email is required!")

        if name and email: # Only if both are provided.
            return render_template("success.html", name=name, email=email) # Redirect or display success page
            # Or, if you don't want a redirect, you could just render the same page again with the data:
            # return render_template("index.html", name=name, email=email)


    return render_template("index.html", name=name, email=email)

if __name__ == "__main__":
    app.run(debug=True) # debug=True for development, set to False in production