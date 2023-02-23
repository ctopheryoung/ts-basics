import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID {
  name: string;
  planets: string | string[];
  id: number;
}

type FilterFunction = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: FilterFunction): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: FilterFunction): HouseWithID[];

function findHouses(
  input: string | House[],
  filter?: FilterFunction
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
