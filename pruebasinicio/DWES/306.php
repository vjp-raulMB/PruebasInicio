<?php
class Empleado
{
    private static float $sueldoTope = 3333;

    public function __construct(
        private string $nombre,
        private string $apellidos,
        private float $sueldo = 1000,
        private array $telefonos = []
    ) {}

    public static function getSueldoTope(): float
    {
        return self::$sueldoTope;
    }

    public static function setSueldoTope(float $nuevoTope): void
    {
        self::$sueldoTope = $nuevoTope;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getApellidos(): string
    {
        return $this->apellidos;
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

    public function getNombreCompleto(): string
    {
        return $this->nombre . " " . $this->apellidos;
    }

    public function debePagarImpuestos(): bool
    {
        return $this->sueldo > self::$sueldoTope;
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

    public static function toHtml(Empleado $emp): string
    {
        $html = "<p>Nombre: " . htmlspecialchars($emp->getNombreCompleto()) .
                "<br>Sueldo: " . htmlspecialchars((string)$emp->getSueldo()) .
                "<br>Debe pagar impuestos: " . ($emp->debePagarImpuestos() ? 'Sí' : 'No') .
                "</p>";
        $html .= "<ol>";
        foreach ($emp->getTelefonos() as $tel) {
            $html .= "<li>" . htmlspecialchars((string)$tel) . "</li>";
        }
        $html .= "</ol>";
        return $html;
    }
}

$empleado = new Empleado("Raul", "Martin Bote", 3500);
$empleado->anyadirTelefono(123456789);
$empleado->anyadirTelefono(987654321);
$empleado->anyadirTelefono(128374656);
echo Empleado::toHtml($empleado);
?>
