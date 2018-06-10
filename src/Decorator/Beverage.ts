export default abstract class Beverage {
    public description = "제목 없음";
    
    public getDescripton(): string{
        return this.description;
    }
    
    public abstract cost(): number;
}