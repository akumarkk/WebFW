from fastapi import FastAPI, HTTPException, status, Depends, Query
import models
from database import Session, engine
from typing import Annotated

app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]


@app.get("/health")
def health():
    return "welcome to wish app!!!"

@app.get("/", status_code=status.HTTP_200_OK)
async def user(user=Query(default="", description="The search query string"), db: db_dependency = None):
    user = user if user is not None else "Tarak"
    user = "Tarak" if user == "" else user
    print(user)
    return {"user" : f"{user}"}
    # return "welcome to wish app!!!"