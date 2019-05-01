import * as Utils from "../../../src/utils";

describe("Utils", () => {
  it("should get future month within same year correctly", () => {
    const currentDate = new Date(2019, 4, 20);
    const incMonth = 2;
    const futureDate = Utils.getFutureMonth(currentDate, incMonth);
    expect(futureDate.getMonth()).toEqual(6);
  });

  it("should get future month in new year correctly", () => {
    const currentDate = new Date(2019, 4, 20);
    const incMonth = 9;
    const futureDate = Utils.getFutureMonth(currentDate, incMonth);
    expect(futureDate.getMonth()).toEqual(1);
  });
});
