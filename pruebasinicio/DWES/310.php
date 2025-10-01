<?php
class Persona
{
    public function __construct(
        protected string $nombre,
        protected string $apellidos,
        protected int $edad
    ) {}

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getApellidos(): string
    {
        return $this->apellidos;
    }

    public function getEdad(): int
    {
        return $this->edad;
    }

    public function setEdad(int $edad): void
    {
        $this->edad = $edad;
    }

    public function getNombreCompleto(): string
    {
        return $this->nombre . " " . $this->apellidos;
    }

    public function __toString(): string
    {
        return "Nombre: " . $this->getNombreCompleto() .
               "<br> | Edad: " . $this->getEdad();
    }
}

class Empleado extends Persona
{
    private static float $sueldoTope = 3333;

    public function __construct(
        string $nombre,
        string $apellidos,
        int $edad,
        private float $sueldo = 1000,
        private array $telefonos = []
    ) {
        parent::__construct($nombre, $apellidos, $edad);
    }

    public static function getSueldoTope(): float
    {
        return self::$sueldoTope;
    }

    public static function setSueldoTope(float $nuevoTope): void
    {
        self::$sueldoTope = $nuevoTope;
    }

    public function getSueldo(): float
    {
        return $this->sueldo;
    }

    public function setSueldo(float $sueldo): void
    {
        $this->sueldo = $sueldo;
    }

    public function getTelefonos(): array
    {
        return $this->telefonos;
    }

    public function setTelefonos(array $telefonos): self
    {
        $this->telefonos = $telefonos;
        return $this;
    }

    public function debePagarImpuestos(): bool
    {
        return $this->edad > 21 && $this->sueldo > self::$sueldoTope;
    }

    public function anyadirTelefono(int $telefono): void
    {
        if (!in_array($telefono, $this->telefonos)) {
            $this->telefonos[] = $telefono;
        }
    }

    public function listarTelefonos(): string
    {
        return implode(", ", $this->telefonos);
    }

    public function vaciarTelefonos(): void
    {
        $this->telefonos = [];
    }

    public function __toString(): string
    {
        $str = parent::__toString() . "<br>";
        $str .= " | Sueldo: " . $this->getSueldo() . "<br>";
        $str .= " | Debe pagar impuestos: " . ($this->debePagarImpuestos() ? 'Sí' : 'No' . "<br>" );
        $str .= "<br> | Teléfonos: [" . implode(", ", $this->getTelefonos()) . "]";
        return $str;
    }
}

$empleado = new Empleado("Raul", "Martin Bote", 23, 3500);
$empleado->anyadirTelefono(123456789);
$empleado->anyadirTelefono(987654321);
$empleado->anyadirTelefono(128374656);
echo $empleado;
?>
