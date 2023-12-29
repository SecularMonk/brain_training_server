import { dataSources } from "..";

export async function generateSanitisedStrings({
   stringLength = 3,
   numStrings,
   dataSource,
}: {
   stringLength?: number;
   numStrings: number;
   dataSource: typeof dataSources.Dictionary;
}) {
   let stringsAreSafe = false;

   while (stringsAreSafe === false) {
      const candidateStrings = generateCandidateStrings(numStrings);
      stringsAreSafe = await testCandidateStrings(candidateStrings, dataSource);
      if (stringsAreSafe === true) {
         return candidateStrings;
      }
   }
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

function generateCandidateStrings(numStrings: number) {
   const newStrings: string[] = [];
   for (let i = 0; i < numStrings; i++) {
      newStrings.push(createRandomString());
   }
   return newStrings;
}

async function testCandidateStrings(strings: string[], dataSource: typeof dataSources.Dictionary) {
   let regexMatch: string = "";
   for (let i = 0, n = strings.length; i < n; i++) {
      regexMatch += `${strings[i]}|`;
   }
   if (regexMatch.charAt(regexMatch.length - 1) === "|") {
      regexMatch = regexMatch.slice(0, regexMatch.length - 1);
   }
   const matches = await dataSource.find({ word: { $regex: new RegExp(regexMatch, "i") } }).toArray();
   return matches.length === 0;
}

const text = { consonants: "BCDFGHJKLMNPQRSTVWXYZ", vowels: "AEIOU" };
