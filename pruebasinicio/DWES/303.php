<?php
class Empleado
{
    public function __construct(
        private string $nombre,
        private string $apellidos,
        private float $sueldo = 1000,
        private array $telefonos = []
    ) {}

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
        return $this->sueldo > 3333;
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
}

$empleado = new Empleado("Raul", "Martin Bote", 3500);
echo $empleado->getNombreCompleto();
$empleado->anyadirTelefono(123456789);
$empleado->anyadirTelefono(987654321);
$empleado->anyadirTelefono(128374656);
echo " Telefono/s: " . $empleado->listarTelefonos() . "<br>";
echo $empleado->debePagarImpuestos() ? "Debe pagar impuestos" : "No debe pagar impuestos";
$empleado->vaciarTelefonos();
echo "<br>Telefono/s: " . $empleado->listarTelefonos();
?>
