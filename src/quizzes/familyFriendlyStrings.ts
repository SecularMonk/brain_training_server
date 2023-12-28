export async function generateFamilyFriendlyString({ stringLength = 3, dataSource }: { stringLength?: number; dataSource: any }) {
   let stringIsSafe = false;
   let safeString: string;
   while (stringIsSafe === false) {
      const newString = createRandomString();
      const query = { word: { $regex: `/${newString}/i` } };
      console.log("query: ", query);
      const unsafeCount = await dataSource.countDocuments(query);
      if (unsafeCount === 0) {
         safeString = newString;
         stringIsSafe = true;
      }
   }
   return safeString;
}

function createRandomString(): string {
   return (
      selectRandomElement({ iterable: text.consonants }) + selectRandomElement({ iterable: text.vowels }) + selectRandomElement({ iterable: text.consonants })
   );
}

function selectRandomElement({ iterable }: { iterable: string }): string {
   try {
      const randomNumber = Math.floor(Math.random() * iterable.length);
      return iterable[randomNumber];
   } catch (error) {
      console.log(error);
   }
}

const text = { consonants: "BCDFGHJKLMNPQRSTVWXYZ", vowels: "AEIOU" };
