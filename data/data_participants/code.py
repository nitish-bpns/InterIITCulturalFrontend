import os
import pandas as pd
import json

# Replace this with the actual file path
input_file_path = 'IITM_Boys - Sheet1.csv'
# input_file_path = 'IITKGP_Girls - Sheet1.csv'

# Read the CSV file into a DataFrame
df = pd.read_csv(input_file_path)

# Remove commas from 'PHONE NO' column
df['PHONE NO'] = df['PHONE NO'].replace(',', '', regex=True)
df['PHONE NO'] = df['PHONE NO'].fillna('Phone_number_not_available')
df['EMAIL ID'] = df['EMAIL ID'].fillna('Email_ID_not_available')


df['Room Number'] = df['Room Number'].ffill()
df['Room Number'] = df['Room Number'].fillna('Room_No_not_available')

# Prompt user for hall name
hall_name = input("Enter the hall name: ")

# Add new columns with constant values
df['hall'] = hall_name + ' ' + df['Room Number']
df['mess'] = ''

# Create additional columns with constant values
df['isAdmin'] = False
df['otp'] = None

# Extract instituteID and gender from the file name
file_name = input_file_path.split('/')[-1]  # Extract file name from path
institute_id = file_name.split('_')[0].strip().replace(' ', '_')
gender = "F" if "Girls" in file_name else "M"

# Add instituteID and gender columns
df['instituteID'] = institute_id
df['gender'] = gender

# Select and rename columns
df = df.rename(columns={
    'NAME': 'name',
    'EMAIL ID': 'email',
    'PHONE NO': 'phone',
    'gender': 'gender',
    'instituteID': 'instituteID',
    'hall': 'hall',
    'mess': 'mess',
    'isAdmin': 'isAdmin',
    'otp': 'otp'
})

# Exclude 'Room Number' column from the resulting DataFrame
df = df.drop(columns=['Room Number'])

# Convert the DataFrame to JSON
json_data = df.to_json(orient='records', default_handler=str)

# Create a 'data' folder if it doesn't exist
data_folder = os.path.join(os.getcwd(), 'data')
os.makedirs(data_folder, exist_ok=True)

# Create a folder with the institute name inside the 'data' folder
output_folder = os.path.join(data_folder, institute_id)
os.makedirs(output_folder, exist_ok=True)

# Save the JSON data to a file with the same name as the input file but with a ".json" extension
output_file_path = os.path.join(output_folder, f'{institute_id}_{gender}.json')
with open(output_file_path, 'w') as json_file:
    json_file.write(json_data)

print(f"JSON data has been saved to '{output_file_path}'")