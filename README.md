Design 
------
ER diagram. 2 Entities
1. Occupation.
id: int (PK)
name: str
rating_id: int (FK -> OccupationRating.id)

2. OccupationRating.
id: int (PK)
name: str
factor: float

Seed Data
---------


a. Occupation Rating
Id, Name, RatingFactor
1, Professional, 1.0
2, White Collar, 1.25
3, Light Manual, 1.50
4, Heavy Manual, 1.75

b. Occupation

Id, Name, Rating
1, Cleaner, 3
2, Doctor, 1
3, Author, 2
4, Farmer, 4
5, Mechanic, 4
6, Florist, 3



Rest API
--------
1. get/occupations
	{"id": int, "name": str, "rating": str, "rating_factor": float}
	
	Returns:
	A list of occupations.

2. get/premium
	{"age": int, "occupation_id": int, "cover_amt": float}
	validations:
		age is a valid integer.
		dob is a valid date.
		cover_amt is a float.		
		all fields are required.
	Returns:
	A float determined by:
	Death Premium = (Death Cover amount * Occupation Rating Factor * Age) /1000 * 12

Rest API should cover the basic requirements.

TODO:
* Seed data for Occupation and OccupationRating.
* Tests for the validations
* UI level validations
* Expose CRUD operations on Occupation, OccupationRating via API (Future Work - out of scope of requirements)
* Use a DB instead of in-memory datastore. (Future Work - out of scope of requirements)
* Authentication for the the WebAPI. (Future Work - out of scope of requirements)


Assumptions:
* The requirements ask for a single page application that consists of a form which accepts the fields Name, Age, Date of Birth (DOB), Occupation, Cover Amt. Given these fields a non-editable field displays the Premium Amount.
* Age is not redundant information when DOB is provided. Age is interpreted as Age when the insurance was first taken, not clients current age. Thus no validation of Age and DOB is done and Age is not determined from the DOB. 
* The premium calculation is triggered on change of age, occupation_id and cover_amt, provided all other values [age, occupation_id, cover_amt] are provided. As they all determine the premium. 
* Calculations are made in the backend as the formula can sit and be maintained with the rest of the business logic as the application grows.
* OccupationRating and Occupations are stored in an in memory datastore to allow CRUD operations on these entities, without a change in the application.
* CRUD operations for OccupationRating and Occupations is considered out of scope of the requirements and is considered future work.
* Authentication of API is considered out of scope of the requirements and is considered future work.


