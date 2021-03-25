namespace Sample {
    /**
     * A class which updates displays with various atmospheric data.
     */
    public class WeatherData {

        private float temperature;
        private float humidity;
        private float pressure;
        private Location location;

        public WeatherData(float temperature, float humidity, float pressure, Location location) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.location = location;
        }

        public void updateMeasurements(float? temperature, float? humidity, float? pressure) {
            this.temperature = temperature ?? this.temperature;
            this.humidity = humidity ?? this.humidity;
            this.pressure = pressure ?? this.pressure;

            updateTargets(temperature, humidity, pressure);
        }

        // Whenever there's a new target, just add it to this private method 😁
        private void updateTargets(float temp, float humidity, float pressure) {
            currentConditionsDisplay.update(temp, humidity, pressure);
            // TODO: add when statisticsDisplay is working
            // statisticsDisplay.update(temp, humidity, pressure);
            forecastDisplay.update(temp, humidity, pressure);
        }
    }
}