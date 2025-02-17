// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();});
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });
          it("should return the divide of the two numbers", () => {
            expect(divide(100, 2)).toEqual(50);
            expect(divide(50, 2)).toEqual(25);
            expect(divide(10, 2)).toEqual(5);
          });
          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
          it("should return undefined if any of the arguments is not a number", () => {
            expect(divide("1",1)).toEqual(undefined);
            expect(divide(1,"1")).toEqual(undefined);
            expect(divide("1","1")).toEqual(undefined);
          })

    })    
})



