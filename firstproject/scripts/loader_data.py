from first_app.models import BaliTouristDestination
import csv 

def run():
    with open('first_app/data.csv') as file:
        reader = csv.reader(file)
        next(reader)    #skip the header
        
        BaliTouristDestination.objects.all().delete()
        
        for row in reader:
            print(row)
            
            touristData = BaliTouristDestination(
                place=row[0],
                location=row[1],
                coordinate=row[2],
                rating=row[3],
                reviews_count=row[4],
                source=row[5],
                description=row[6],
                fee=row[7],
            )
            touristData.save()