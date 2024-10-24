from fastapi import FastAPI, HTTPException, status
# import models
# from database import SessionLocal, engine


app = FastAPI()


@app.get("/health")
def health():
    return "welcome to wish app!!!"